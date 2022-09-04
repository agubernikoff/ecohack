class Organization < ApplicationRecord
    has_many :users

    validates :company_name, presence: true
    validates :points, default: nil
end
