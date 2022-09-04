class OrganizationsController < ApplicationController

    def index
        organization = Organization.all
        render json: organization
    end

    def update
        organ = Organization.find(params[:id])
    end

    def new
        organization = Ogranization.new
    end

    def create
        organization = Organization.create(organization_params)
    end


    private

    def organization_params
        params.require(:organization).permit(:company_name, :points)
    end
end
