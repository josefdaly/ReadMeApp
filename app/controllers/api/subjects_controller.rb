module Api
  class SubjectsController < ApiController
    def create
      @subject = Subject.new(subject_params)

      if @subject.save
        render json: @subject
      else
        render json: @subject.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @subject = Subject.includes(:books).find(params[:id])
      render :show
    end

    def index
      @subjects = Subject.all
      render json: @subjects
    end

    private

    def subject_params
      params.require(:subject).permit(:title)
    end
  end
end
