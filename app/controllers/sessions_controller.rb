class SessionsController < ApplicationController

    def create
        
        user = User.find_by(email: params[:email])
        
        if user && user.authenticate(params[:password]) 
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        session[:user_id] = nil
        head :no_content
    end


end
