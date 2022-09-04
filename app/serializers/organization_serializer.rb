class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :points
  has_many :users
end
