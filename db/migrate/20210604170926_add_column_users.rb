class AddColumnUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :amount, :integer
  end
end
