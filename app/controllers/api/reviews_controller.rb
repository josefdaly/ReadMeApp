module Api
  class ReviewsController < ApiController
    def create
      @review = Review.new(review_params)
      if @review.save
        render json: @review
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @review = Review.find(params[:id])
      render json: @review
    end

    private

    def review_params
      params.require(:review).permit(
        :author_id,
        :book_id,
        :quantitative,
        :qualitative
      )
    end
  end
end
