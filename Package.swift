// swift-tools-version: 6.0

import PackageDescription

let package = Package(
    name: "ApiSwift",
    platforms: [
        .iOS(.v17),
        .macOS(.v14),
    ],
    products: [
        .library(name: "ApiSwift", targets: ["ApiSwift"]),
        .executable(name: "api-swift", targets: ["ApiSwiftCLI"]),
    ],
    targets: [
        .target(name: "ApiSwift"),
        .executableTarget(
            name: "ApiSwiftCLI",
            dependencies: ["ApiSwift"]
        ),
        .testTarget(
            name: "ApiSwiftTests",
            dependencies: ["ApiSwift"]
        ),
    ]
)
