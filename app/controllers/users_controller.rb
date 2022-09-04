class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
  before_action :set_user, only: %i[ show edit update destroy ]

  def index
      users = User.all
      render json: users
  end
    
  def show
    user = User.find(session[:user_id])
    render json: user
  end 
    
      
  # def create
  #   user = User.create(user_params)
  #   session[:user_id] = user.id
  #   respond_to do |format|
  #     if user.save
  #       format.json { render :show, status: :created, location: user }
  #     else
  #       format.html { render :new, status: :unprocessable_entity }
  #       format.json { render json: user.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end
  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    user = User.find(session[:user_id])
    user.update!(user_update_params)
    render json: user
  end
    
  def destroy
    user = User.find(session[:user_id])
    user.edits.update_all(user_id:nil)
    user.destroy
    session.delete :user_id
    head :no_content
  end

    private
    
    def set_user
      user = User.find(current_user[:id])
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :points, :organization_id)
    end

    def render_unprocessable_entity invalid
      render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
    end
  
    def render_not_found
      render json: {error: "User not found"}, status: 404
    end
end
