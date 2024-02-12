export const contractAddress = {
  eth: "",
  // bsc: "0x0a3ac5919f63f52668713cbCcC6C03FCD0Fdf51F",
  bsc: "0xf60c925E16868dfECA7999Bb07281b97Cab2cF51",
  polygon: ""
};

export const abi = [{ "inputs": [{ "internalType": "address payable", "name": "_collectWallet", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ECDSAInvalidSignature", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "ECDSAInvalidSignatureLength", "type": "error" }, { "inputs": [{ "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "ECDSAInvalidSignatureS", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "allowance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" }], "name": "ERC20InsufficientAllowance", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" }], "name": "ERC20InsufficientBalance", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "approver", "type": "address" }], "name": "ERC20InvalidApprover", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }], "name": "ERC20InvalidReceiver", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }], "name": "ERC20InvalidSender", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }], "name": "ERC20InvalidSpender", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnableInvalidOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OwnableUnauthorizedAccount", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WITHDRAW_SALT", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "calculateTax", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getLatestPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "salt", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "_collectWallet", "type": "address" }], "name": "updateCollectWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_fee", "type": "uint256" }], "name": "updateFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "withdraw", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "to", "type": "address" }], "name": "withdrawBalance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]

export const gameCards = [
  { card: "diamonds_2", value: 2, color: 8 },
  { card: "diamonds_3", value: 3, color: 8 },
  { card: "diamonds_4", value: 4, color: 8 },
  { card: "diamonds_5", value: 5, color: 8 },
  { card: "diamonds_6", value: 6, color: 8 },
  { card: "diamonds_7", value: 7, color: 8 },
  { card: "diamonds_8", value: 8, color: 8 },
  { card: "diamonds_9", value: 9, color: 8 },
  { card: "diamonds_10", value: 10, color: 8 },
  { card: "diamonds_jack", value: 11, color: 8 },
  { card: "diamonds_queen", value: 12, color: 8 },
  { card: "diamonds_king", value: 13, color: 8 },
  { card: "diamonds_ace", value: 14, color: 8 },

  { card: "hearts_2", value: 2, color: 4 },
  { card: "hearts_3", value: 3, color: 4 },
  { card: "hearts_4", value: 4, color: 4 },
  { card: "hearts_5", value: 5, color: 4 },
  { card: "hearts_6", value: 6, color: 4 },
  { card: "hearts_7", value: 7, color: 4 },
  { card: "hearts_8", value: 8, color: 4 },
  { card: "hearts_9", value: 9, color: 4 },
  { card: "hearts_10", value: 10, color: 4 },
  { card: "hearts_jack", value: 11, color: 4 },
  { card: "hearts_queen", value: 12, color: 4 },
  { card: "hearts_king", value: 13, color: 4 },
  { card: "hearts_ace", value: 14, color: 4 },

  { card: "spades_2", value: 2, color: 1 },
  { card: "spades_3", value: 3, color: 1 },
  { card: "spades_4", value: 4, color: 1 },
  { card: "spades_5", value: 5, color: 1 },
  { card: "spades_6", value: 6, color: 1 },
  { card: "spades_7", value: 7, color: 1 },
  { card: "spades_8", value: 8, color: 1 },
  { card: "spades_9", value: 9, color: 1 },
  { card: "spades_10", value: 10, color: 1 },
  { card: "spades_jack", value: 11, color: 1 },
  { card: "spades_queen", value: 12, color: 1 },
  { card: "spades_king", value: 13, color: 1 },
  { card: "spades_ace", value: 14, color: 1 },

  { card: "clubs_2", value: 2, color: 2 },
  { card: "clubs_3", value: 3, color: 2 },
  { card: "clubs_4", value: 4, color: 2 },
  { card: "clubs_5", value: 5, color: 2 },
  { card: "clubs_6", value: 6, color: 2 },
  { card: "clubs_7", value: 7, color: 2 },
  { card: "clubs_8", value: 8, color: 2 },
  { card: "clubs_9", value: 9, color: 2 },
  { card: "clubs_10", value: 10, color: 2 },
  { card: "clubs_jack", value: 11, color: 2 },
  { card: "clubs_queen", value: 12, color: 2 },
  { card: "clubs_king", value: 13, color: 2 },
  { card: "clubs_ace", value: 14, color: 2 },
];

export const hands = [
  "4 of a kind",
  "Straight flush",
  "Straight",
  "Flush",
  "High card",
  "Pair",
  "Two pair",
  "Royal Flush",
  "3 of a kind",
  "Full house",
];

export const payout = [
  25, // 4 of a kind
  50, // Straight flush
  4, // Straight
  6, // Flush
  0, // High card
  1, // Pair
  2, // Two pair
  976, // Royal Flush
  3, // 3 of a kind
  9 // Full house
];

export const bets = [
  5,
  10,
  15,
  20,
  25
];