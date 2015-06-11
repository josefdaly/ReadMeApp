module Api
  class BooksController < ApiController
    def create
      @book = Book.new(book_params.merge({ author_id: current_user.id }))

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
      render json: @books
    end

    def destroy
      @book = current_user.written_works.find(params[:id])
      @book.destroy()
      render json: {}
    end

    private

    def board_params
      params.require(:book).permit(:title, :release_date, :doc_url)
    end
  end
end
