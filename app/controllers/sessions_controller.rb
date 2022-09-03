class SessionsController < ApplicationController

    def create
        
        @user = User.find_by(email_address: params[:email])
        
        if @user && @user.authenticate(params[:password]) 
            session[:user_id] = @user.id
            render json: status: :ok         
        else
            render json: status: :unprocessable_entity
        end
    end

    def destroy
        session[:user_id] = nil
        redirect_to root_path
    end


end
