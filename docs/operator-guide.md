---
sidebar_position: 5
---

# Operator guide

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

# Holesky parameters
L1_RPC=
L1_CHAIN=17000

# Polygon amoy parameters
L2_RPC=
L2_CHAIN=80002

PINATA_API_KEY=7824585a98fe36414d68
PINATA_SECRET_API_KEY=41a53a837879721969e73008d91180df30dbc66097c7f75f08cd5489176b43ea
IPFS_HOST=https://othentic.mypinata.cloud/ipfs/

# Required Smart contract addresses for the AVS network
ATTESTATION_CENTER_ADDRESS=0x63b6C07daAdb671421e25D726C33Fc8e0F614509
OTHENTIC_REGISTRY_ADDRESS=0x41994741eD86Ec48e9578d0f64839E3F546466Fa
AVS_GOVERNANCE_ADDRESS=0xFe0c7666d3DbBf29FDCFe8C27d99af81F291EeD1

OTHENTIC_CLIENT_IP=34.121.50.170
OTHENTIC_BOOTSTRAP_ID=12D3KooWBNFG1QjuF3UKAKvqhdXcxh9iBmj88cM5eU2EK5Pa91KB
OTHENTIC_BOOTSTRAP_SEED=97a64de0fb18532d4ce56fb35b730aedec993032b533f783b04c9175d465d9bf

# Maya Performer environment variables
SINDRI_API_KEY=
AVS_PRIVATE_KEY= # Same as PRIVATE_KEY defined above
AVS_OPERATOR_RPC=http://34.121.50.170:8545
```

4. Before registering the operator to the Maya Network, ensure that you have a private key with sufficient funds that you want to restake in Holesky ETH.
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

Note: The optional parameters will be the ones that will be displayed on the EigenLayer UI.

6. Add environment variables for `L1_RPC`, `L2_RPC` and `SINDRI_API_KEY`.
- The `L1_RPC` and `L2_RPC` should be holesky and polygon amoy. The RPC links can also be obtained from [ankr](https://ankr.com).
- The `SINDRI_API_KEY` can be generated using sindri dashboard by signing up on [sindri](https://sindri.app/signup) app.

7. After the operator is registered and .env is completed then execute the following command to start validating Maya AVS.
```shell
docker compose up -d
```

8. Join our discord group if you encounter any problems: https://discord.gg/HpCPQwWtkr
