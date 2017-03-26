defmodule HeaderParser.PageController do
  use HeaderParser.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
