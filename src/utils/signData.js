export const withdrawSign = async (nonce, from, amount, to, provider) => {
    const typedData = {
        domain: {
            chainId: 56,
            name: 'MailWZ',
            verifyingContract: to,
            version: '1'
        },
        message: {
            to: from,
            amount: amount, // Convert amount to BigNumber if not already
            nonce: nonce, // Convert nonce to BigNumber if not already
        },
        primaryType: 'Withdraw',
        types: {
            EIP712Domain: [
                { name: 'name', type: 'string' },
                { name: 'version', type: 'string' },
                { name: 'chainId', type: 'uint256' },
                { name: 'verifyingContract', type: 'address' }
            ],
            Withdraw: [
                { name: 'to', type: 'address' },
                { name: 'amount', type: 'uint256' },
                { name: 'nonce', type: 'uint256' },
            ],
        },
    };

    try {
        const method = 'eth_signTypedData_v3';
        const params = [from, JSON.stringify(typedData)];

        // Send the request to sign the typed data using eth_signTypedData_v3
        const result = await provider.send(method, params);

        // Extract the signature from the result
        const signature = result;

        return signature;
    } catch (error) {
        // throw new Error('Failed to sign typed data: ' + error.message);
    }
};
