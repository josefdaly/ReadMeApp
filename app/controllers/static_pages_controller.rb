class StaticPagesController < ApplicationController
  before_action :redirect_to_log_in

  def root
  end
end
