import Foundation

public struct APIClient: Sendable, Equatable {
    public let baseURL: URL

    public init(baseURL: URL) {
        self.baseURL = baseURL
    }

    public func url(for request: APIRequest) -> URL {
        request.url(relativeTo: baseURL)
    }
}
