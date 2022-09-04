class Organization < ApplicationRecord
    has_many :users

    validates :company_name, presence: true
    validates :points, default: nil

    def calculate_total_points
        if self.users.length>0
            self.users.map{|post| user.points}.sum
        else 0
        end
    end
end
