class ApplicationController < ActionController::API
  include ActionController::Cookies
  helper_method :current_user,
    
    
        def current_user
        
        if(session[:user_id] && session[:user_id] != nil)
            return User.find(session[:user_id])
        else
          nil
        end
    end

  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end
end
