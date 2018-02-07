class ChatController < ApplicationController

  before_action :authenticate!

  # display last 20

  def show
    @messages = Message.order(created_at: :asc).last(20)
  end

  private

  # redirect user to /login if no UN

  def authenticate!
    redirect_to login_path unless session[:username]
  end

end
