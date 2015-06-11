module Api
  class LibraryItemsController < ApiController
    def create
      @library_item = LibraryItem.new(library_item_params)

      if @library_item.save
        render json: @library_item
      else
        render json: @library_item.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def library_item_params
      params.require(:library_item).permit(:owner_id, :book_id)
    end
  end
end
