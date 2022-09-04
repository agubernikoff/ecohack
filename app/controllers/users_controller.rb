class UsersController < ApplicationController
  

    def new
        user = User.new
      end
    
      
      def edit
      end
    
      
      def create
        user = User.create!(user_params)
        render json: user, status: :created
      end

      private
    

    
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password_digest, :organizaton_id, :points)
    end

end
