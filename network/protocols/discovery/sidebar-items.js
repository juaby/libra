initSidebarItems({"fn":[["add_to_network","Register the discovery sender and event handler with network and return interfaces for those actors."]],"struct":[["Discovery","The actor running the discovery protocol."],["DiscoveryMsg","A Discovery message contains notes collected from other peers within the system."],["DiscoveryNetworkSender","The interface from Discovery to Networking layer."],["FullNodeInfo","Discovery information relevant to public full nodes and clients."],["FullNodeInfoHasher",""],["Note","A `Note` contains a validator's signed `PeerInfo` as well as a signed `FullNodePayload`, which provides relevant discovery info for public full nodes and clients."],["PeerInfo","A `PeerInfo` represents the network address(es) of a Peer."],["PeerInfoHasher",""],["SignedFullNodeInfo","A `FullNodeInfo` authenticated by the peer's root `network_signing_key` stored on-chain."],["SignedPeerInfo","A `PeerInfo` authenticated by the peer's root `network_signing_key` stored on-chain."],["VerifiedNote",""]],"type":[["DiscoveryNetworkEvents","The interface from Network to Discovery module."]]});