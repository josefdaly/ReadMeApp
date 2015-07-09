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

  # 3 random users for landing page

  def index
    num_rands = 3
    id_arr = []
    sample_id_arr = []
    User.all.each do |user|
      id_arr << user.id
    end
    id_arr.delete(current_user.id)
    num_rands.times do |i|
      rand_index = (rand * id_arr.length).to_i
      sample_id_arr << id_arr[rand_index]
      id_arr.delete_at(rand_index)
    end
    # rands = []
    # num_records = User.all.count
    #
    # num_rands.times do  |i|
    #   rand_id = ((rand * User.all.count) + 1).to_i
    #   debugger
    #   until User.all.pluck(:id).include?(rand_id) && rand_id != current_user.id
    #     rand_id = ((rand * User.all.count) + 1).to_i
    #   end
    #   rands << rand_id
    # end
    #
    @users = User.find(sample_id_arr.split).shuffle!
    render 'index.json.jbuilder'
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname)
  end
end
