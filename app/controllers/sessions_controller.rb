class SessionsController < ApplicationController
  before_action :redirect_to_homepage, only: :new

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid Email or Password"]
      render :new
    end
  end

  def new
    render :new
  end

  def destroy
    log_out!
    render json: {}
  end
end
