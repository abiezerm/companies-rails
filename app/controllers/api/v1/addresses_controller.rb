module Api
  module V1
    class AddressesController < ApiController
      def create
        form = Clients::AddAddress.call(params[:client_id], address_params)

        if form.save
          api_success(form.address, {}, 200)
        else
          api_error(400, 'Form Invalid', form.errors)
        end
      end

      def show
        # #
      end

      def update
        # #
      end

      def destroy
        # #
      end

      private

      def address_params
        params.require(:address).permit(:address1, :address2, :zip_code, :city, :country, :client_id)
      end
    end
  end
end
