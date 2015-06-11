class UsersController < ApplicationController
  before_action :redirect_to_log_in, only: :show
  before_action :redirect_to_homepage, only: :new

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    render :new
  end

  def show
    @user = User.includes(:written_works, library_books: :author).find(params[:id])
    render 'show.json.jbuilder'
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname)
  end
end
