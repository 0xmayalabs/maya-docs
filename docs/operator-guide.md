---
sidebar_position: 5
---

# Operator guide

## Prerequisites

Here are some prerequisites that are needed before configuring Maya AVS operator:
- Git and Docker installed
- Ethereum wallet private key in plain text
- Ensure the wallet has sufficient holesky ETH that you want to restake

## Steps

Following are the steps to run Maya AVS Operator to participate in generating proofs of authenticity for the Maya Protocol.

1. Clone the Maya AVS repository.
```shell
git clone https://github.com/0xmayalabs/maya-avs.git
cd maya-avs
```

2. Pull the maya operator image.
```shell
docker pull 0xmayalabs/maya-operator:v0.0.3
```

3. Create the .env file with all the required information for the following steps. Copy the template below into the newly created .env file.
```
# Maya Operator environment variables

PRIVATE_KEY=
TASK_PERFORMER=http://maya-performer:2500

# Holesky parameters
L1_RPC=
L1_CHAIN=17000

# Polygon amoy parameters
L2_RPC=
L2_CHAIN=80002

# Pinata IPFS gateway parameters
PINATA_API_KEY=7824585a98fe36414d68
PINATA_SECRET_API_KEY=41a53a837879721969e73008d91180df30dbc66097c7f75f08cd5489176b43ea
IPFS_HOST=https://othentic.mypinata.cloud/ipfs/

# Required Smart contract addresses for the AVS network
ATTESTATION_CENTER_ADDRESS=0x63b6C07daAdb671421e25D726C33Fc8e0F614509
OTHENTIC_REGISTRY_ADDRESS=0x41994741eD86Ec48e9578d0f64839E3F546466Fa
AVS_GOVERNANCE_ADDRESS=0xFe0c7666d3DbBf29FDCFe8C27d99af81F291EeD1

# Othentic parameters needed to connect with operator network
OTHENTIC_CLIENT_IP=34.121.50.170
OTHENTIC_BOOTSTRAP_ID=12D3KooWBNFG1QjuF3UKAKvqhdXcxh9iBmj88cM5eU2EK5Pa91KB
OTHENTIC_BOOTSTRAP_SEED=97a64de0fb18532d4ce56fb35b730aedec993032b533f783b04c9175d465d9bf

# Maya Performer environment variables

AVS_PRIVATE_KEY= # Same as PRIVATE_KEY defined above
AVS_OPERATOR_RPC=http://34.121.50.170:8545
```

4. Before registering the operator to the Maya Network, ensure that you have a private key for an ethereum address with sufficient funds that you want to restake in Holesky ETH.
The private key will be needed when registering the operator. Add the private key to the .env file in the `PRIVATE_KEY` and `AVS_PRIVATE_KEY` fields.

5. Register your operator with the Maya Network by executing the following interactive command:
```shell
docker run -it 0xmayalabs/maya-operator:v0.0.3 operator register
```

The above command will ask for the following information:
- Private Key
- AVS Governance Address (see above .env)
- Enter the amount of ETH you would like to stake.
- Operator name (Optional)
- Description (Optional)
- Website (Optional)
- Logo URL (Optional)
- Twitter profile (Optional)

Note:
- The above command can take upto a couple of minutes to complete.
- The optional parameters will be the ones that will be displayed on the EigenLayer UI.

6. Add environment variables for `L1_RPC` and `L2_RPC`.
- The `L1_RPC` and `L2_RPC` should be holesky and polygon amoy respectively. The RPC links can also be obtained from [ankr](https://ankr.com).

7. After the operator is registered and .env is completed then execute the following command to start validating Maya AVS.
```shell
docker compose up -d
```

## Troubleshooting

If you encounter any issues, join our discord group: https://discord.gg/HpCPQwWtkr
