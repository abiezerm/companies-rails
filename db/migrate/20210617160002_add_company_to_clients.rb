class AddCompanyToClients < ActiveRecord::Migration[6.1]
  def change
    add_reference :clients, :company, foreign_key: true
  end
end
