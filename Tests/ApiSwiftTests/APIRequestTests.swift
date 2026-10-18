import ApiSwift
import Foundation
import Testing

@Test func joinsPathOntoBaseURL() {
    let client = APIClient(baseURL: URL(string: "https://example.com/api")!)
    let request = APIRequest(method: .get, path: "v1/health")

    #expect(request.method.rawValue == "GET")
    #expect(client.url(for: request).absoluteString == "https://example.com/api/v1/health")
}

@Test func dropsEmptyPathSegments() {
    let client = APIClient(baseURL: URL(string: "https://example.com/api/")!)
    let request = APIRequest(method: .post, path: "/v1//items/")

    #expect(client.url(for: request).absoluteString == "https://example.com/api/v1/items")
}
