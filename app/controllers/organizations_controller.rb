class OrganizationsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid,with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound,with: :render_not_found

    def index
        organization = Organization.all
        render json: organization
    end

    def show
        organ = Organization.find(params[:id])
        render json: organ
    end

    def update
        organ = Organization.find(params[:id])
        organ.update!(organization_params)
        render json: organization
    end

    def delete
        organization = Ogranization.find(params[:id])
        organization.destroy
        render json: organization
    end

    def create
        organization = Organization.create!(organization_params)
        render json: organization
    end


    private

    def organization_params
        params.require(:organization).permit(:company_name, :points)
    end

    def render_unprocessable_entity invalid
        render json: {errors: invalid.record.errors.full_messages},status: :unprocessable_entity
      end
    
      def render_not_found
        render json: {error: "User not found"}, status: 404
      end
end
