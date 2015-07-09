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

      render json: {}
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
