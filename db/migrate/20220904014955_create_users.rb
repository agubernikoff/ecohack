class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.belongs_to :organization, null: true, foreign_key:true
      t.integer :points

      t.timestamps
    end
  end
end
