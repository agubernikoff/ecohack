class Organization < ApplicationRecord
    has_many :users

    validates :company_name, presence: true
    validates :points, presence: true

    def calculate_total_points
        if self.users.length>0
            self.users.map{|user| user.points}.sum
        else 0
        end
    end
end
