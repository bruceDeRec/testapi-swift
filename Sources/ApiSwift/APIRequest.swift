import Foundation

public struct APIRequest: Sendable, Equatable {
    public enum Method: String, Sendable, Equatable {
        case get = "GET"
        case post = "POST"
        case put = "PUT"
        case delete = "DELETE"
    }

    public var method: Method
    public var path: String

    public init(method: Method, path: String) {
        self.method = method
        self.path = path
    }

    public func url(relativeTo baseURL: URL) -> URL {
        path.split(separator: "/", omittingEmptySubsequences: true)
            .reduce(baseURL) { url, component in
                url.appending(path: String(component))
            }
    }
}
