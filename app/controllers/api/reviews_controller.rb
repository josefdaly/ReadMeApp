module Api
  class ReviewsController < ApiController
    def create
      @review = Review.new(review_params)
      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @review = Review.includes(:author).find(params[:id])
      render :show
    end

    private

    def review_params
      params.require(:review).permit(
        :author_id,
        :book_id,
        :quantitative,
        :qualitative,
        :title
      )
    end
  end
end
