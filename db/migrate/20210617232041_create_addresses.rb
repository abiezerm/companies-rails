class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.text :address1
      t.text :address2
      t.string :zip_code
      t.string :city
      t.string :country
      t.references :client, index: true, foreign_key: { to_table: :clients }

      t.timestamps
    end
  end
end
