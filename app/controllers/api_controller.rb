class ApiController < ActionController::API
  include ActionController::MimeResponds

  rescue_from ActiveRecord::RecordNotUnique, with: :error_not_unique
  rescue_from ActiveRecord::RecordNotFound, with: :error_record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :error_generic

  def error_generic(exception)
    logger.info exception
    api_error(500, 'Internal Error', [])
  end

  def error_record_not_found(exception)
    logger.error exception.class_name
    if exception.class_name
      api_error(404, "#{exception.class_name} not found!", [])
    elsif exception.model
      api_error(404, "#{exception.model} not found!", [])
    else
      api_error(404, 'Not found!', [])
    end
  end

  def error_default(exception)
    api_error(404, exception.message, [])
  end

  def error_not_unique(exception)
    logger.info exception
    api_error(400, 'Already exists')
  end

  private

  def api_success(data = nil, options = {}, status_code = 200, message = '')
    resp_data = {}
    resp_data[:data] = ActiveModelSerializers::SerializableResource.new(data, options) if data
    resp_data[:errors] = []
    resp_data[:message] = message
    render json: resp_data, status: status_code
  end

  def api_success_pagination(params, options = {}, status_code = 200, message = '')
    resp_data = {}
    resp_data[:data] = ActiveModelSerializers::SerializableResource.new(params[:data], options) if params[:data]
    resp_data[:page] = params[:page] if params[:page]
    resp_data[:pageSize] = params[:page_size] if params[:page_size]
    resp_data[:totalPages] = params[:total_pages] if params[:total_pages]
    resp_data[:total] = params[:total] if params[:total]
    resp_data[:totalFiltered] = params[:total_filtered] if params[:total_filtered]
    resp_data[:errors] = []
    resp_data[:message] = message
    render json: resp_data, status: status_code
  end

  def api_error(status_code = 500, message = '', errors = nil)
    resp_data = {}
    resp_data[:data] = nil
    resp_data[:message] = message if message
    resp_data[:errors] = errors if errors
    render json: resp_data, status: status_code
  end
end
