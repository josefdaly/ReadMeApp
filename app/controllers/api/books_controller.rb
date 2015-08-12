module Api
  class BooksController < ApiController
    def create
      @book = Book.new(book_params)

      if @book.save
        render json: @book
      else
        render json: @book.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @book = Book.includes(:author, :subjects).find(params[:id])
      render :show
    end

    def index
      @books = Book.all

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
        @books = Book.joins(:author).where(
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
      @books = Book.last(4)

      render :index
    end

    def featured
      id_arr = []
      sample_id_arr = []
      # inefficient; figure out better way to sample book table
      Book.all.each do |book|
        id_arr << book.id
      end
      current_user.written_works.each do |book|
        id_arr.delete(book.id)
      end
      8.times do |i|
        rand_index = (rand * id_arr.length).to_i
        sample_id_arr << id_arr[rand_index]
        id_arr.delete_at(rand_index)
      end

      @books = Book.find(sample_id_arr.split).shuffle!
      render :index
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
