import React from 'react'

export default class Whitelist extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isConnected: false,
        }
    }

    handleWhitelistUpdate = async e => {
        e.preventDefault()

        try {
            let isConnected = await window.connectWallet()

            let account = await window.getCoinbase()
            let checkNft = await window.checkWhitelistNft(account)

            if (!checkNft){
                // take signature here
                let auth_token = null

                let signature = await window.sign(window.config.whitelist_nft, await window.getCoinbase())
                console.log({signature})
                auth_token = signature
                // end taking signature logic

                let chainId = await window.getChainId()
                chainId = JSON.stringify(chainId)
                let m = window.alertify.message("Processing...")

                try {
                    m.ondismiss = f => false

                    await window.jQuery.ajax({
                        url: `${window.config.api_baseurl}/api/whitelist-nft`,
                        method: 'POST',
                        data: {chainId},
                        // processData: false,
                        headers: {
                            'auth-token': auth_token
                        }
                    })

                    window.alertify.message("Whitelisted!")
                } catch (e) {
                    window.alertify.error("Something went wrong!"+e.responseText)
                } finally {
                    m.ondismiss = f => true
                    m.dismiss()
                }
            }

            this.setState({ isConnected })
            if (isConnected) {
                let coinbase = await window.getCoinbase()
                this.setState({ coinbase })
            }
        } catch (e) {
            window.alertify.error(String(e))
        }

    }

    render() {
        return (
            <>
                <div className="whitelist-nft" style={{maxWidth: '100%', width: '100%'}}>
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                                <div className="col-lg-6  offset-lg-3">
                                    <div className="earn-hero-content">
                                        <h2>CATS AND WATCHES SOCIETY WHITELIST</h2>
                                        {/* <h5>Visit <a style={{textTransform: 'lowercase'}} href='https://mining.dyp.finance'>https://mining.dyp.finance</a> to join the Ethereum Mining Pool Whitelist</h5> */}
                                        <p>TO GET YOUR ADDRESS REGISTERED FOR THE UPCOMING MINT YOU HAVE TO CONNECT YOUR WALLET, SIGN A MESSAGE WITH YOUR METAMASK WALLET, AND JOIN OUR DISCORD. YOU WILL BE ABLE TO MINT YOUR CAWS ONLY FROM REGISTERED ADDRESS.</p>
                                        <div className="earn-hero-btns">
                                            <div className="p2process-reports">
                                                <p style={{cursor: 'pointer', fontWeight: '600'}} onClick={this.handleWhitelistUpdate} id="dropdownMenuButton">{this.state.isConnected ? "Wallet Connected" : "Connect Wallet"}</p>
                                                <a target="_blank" href="https://discord.gg/dypcaws" style={{border: '0'}}><p style={{cursor: 'pointer', fontWeight: '600'}}>JOIN DISCORD</p></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}