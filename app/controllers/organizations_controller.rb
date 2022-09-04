class OrganizationsController < ApplicationController

    def update
        organ = Organization.find(params[:id])
        
    end
end
