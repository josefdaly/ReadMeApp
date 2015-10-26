module Api
  class BooksController < ApiController
    skip_before_action :require_signed_in!, only: [:index, :show]
    before_action :cors_set_access_control_headers


    def cors_set_access_control_headers
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'GET'
    end

    def create
      @book = Book.new(book_params)

      if @book.save
        render json: @book
      else
        render json: @book.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @book = Book.includes(:author, :subjects, reviews: :author).find(params[:id])
      render :show
    end

    def index
      @books = Book.includes(:author, reviews: :author).all

      render :index
    end

    def destroy
      @book = current_user.written_works.find(params[:id])
      @book.destroy

      render json: {}
    end

    def search
      if params[:query].present?
        # search for title
        # @books = Book.where("LOWER(title) ~ ?", params[:query].downcase)

        # search by title and author name
        # still buggy
        @books = Book.includes(:author, reviews: :author).joins(:author).where(
          "LOWER(books.title) ~ ? OR LOWER(users.fname || ' ' || users.lname) ~ ?",
          params[:query].downcase,
          params[:query].downcase
        )

        render :index
      else
        render json: []
      end
    end

    def recent
      @books = Book.includes(:author, reviews: :author).last(4)

      render :index
    end

    def featured
      id_arr = []
      sample_id_arr = []
      # inefficient; figure out better way to sample book table
      Book.all.to_a.reverse.each_with_index do |book, idx|
        id_arr << book.id if idx > 4
      end
      current_user.written_works.each do |book|
        id_arr.delete(book.id)
      end
      i = 0
      while i < 4 && id_arr.count > 0
        rand_index = (rand * id_arr.length).to_i
        sample_id_arr << id_arr[rand_index]
        id_arr.delete_at(rand_index)
        i+=1
      end
      if sample_id_arr.count > 0
        @books = Book.includes(:author, :reviews).find(sample_id_arr.split).shuffle!
        render :index
      else
        render json: {}
      end
    end

    def top_rated
      # @books = Book.includes(:author, reviews: :author).limit(10).order(:average_rating)
      # render :index
    end

    private

    def book_params
      params.require(:book).permit(
        :title,
        :description,
        :doc_url,
        :author_id,
        :cover_url
      )
    end
  end
end
