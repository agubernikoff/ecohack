class CreateOrganizations < ActiveRecord::Migration[6.1]
  def change
    create_table :organizations do |t|
      t.string :company_name
      t.integer :points

      t.timestamps
    end
  end
end
