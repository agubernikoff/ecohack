class ScannersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound,with: :render_not_found

    def scandit
        user = User.find(session[:user_id])
        if user
            render json: {key:ENV['SCANDIT_KEY']}, status: 200
        end
    end

    def barcode_lookup
        # proxyurl = "https://cors-anywhere.herokuapp.com/"
        response= HTTParty.get("https://api.barcodelookup.com/v3/products?barcode=#{params[:barcode]}&formatted=y&key=#{ENV['BARCODE_KEY']}")
        if response 
            render json: response.body, status: 200
        else render json: {error: "That did not work"}, status: 400
    end
    end

    private

    def render_not_found
        render json: {error: "User not found"}, status: 404
    end
end