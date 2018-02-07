class AuthController < ApplicationController

before_action :only_for_anonymous #check the user

def new; end

# get user name

def create
  session[:username] = params[:username]
  redirect_to root_path
end

private

# if user has been here before, go to chat window
def only_for_anonymous
  redirect_to root_path if session[:username]
end

end
