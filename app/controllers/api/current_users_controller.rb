module Api
  class CurrentUsersController < ApiController
    def show
      @user = current_user
      render 'users/show.json.jbuilder'
    end
  end
end
