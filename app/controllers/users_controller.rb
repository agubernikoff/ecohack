class UsersController < ApplicationController

    def new
        @user = User.new
      end
    
      
      def edit
      end
    
      
      def create
        @user = User.create(user_params)
        session[:user_id] = @user.id
        respond_to do |format|
          if @user.save
            format.html { redirect_to new_booking_path}
            format.json { render :show, status: :created, location: @user }
          else
            format.html { render :new, status: :unprocessable_entity }
            format.json { render json: @user.errors, status: :unprocessable_entity }
          end
        end
      end

      private
    
    def set_user
      @user = User.find(current_user[:id])
    end

    
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :points)
    end
end
end
