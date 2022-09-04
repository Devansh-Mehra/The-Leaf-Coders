import React from 'react'
import "./Faq.css";
import { Container } from "react-bootstrap";
const Faq= () => {
    return (
        <div>
            <div className="background-color">
      <Container className="main--btn" fluid>
      <div className="space">
          <div className="main--btn">
            <br></br>
    
            <h2 className='main-main-main'>FREQUENTLY ASKED QUESTIONS</h2>
            <br></br>

            <div className="my-second-container">
              <div className="accordion">
                <div className="accordion-item" id="question1">
                  <a className="accordion-link" href="#question1">
                  What is a blockchain?
                    <i class="fas fa-plus"></i>
                    {/* <i class="fas fa-minus"></i> */}
                  </a>
                  <div className="answer">
                    <p>
                    A blockchain is a distributed, cryptographically-secure database structure that allows network participants to establish a trusted and immutable record of 
                    transactional data without the need for intermediaries. A blockchain can execute a variety of functions beyond transaction settlement, such as smart contracts.
                    </p>
                  </div>
                </div>
                <div className="accordion-item" id="question2">
                  <a className="accordion-link" href="#question2">
                  What are Smart contracts?
                    <i class="fas fa-plus"></i>
                    {/* <i class="fas fa-minus"></i> */}
                  </a>
                  <div className="answer">
                    <p>
                    Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of 
                    an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss.
                    </p>
                  </div>
                </div>
                <div className="accordion-item" id="question3">
                  <a className="accordion-link" href="#question3">
                  What are NFTs and how do they work?
                    <i class="fas fa-plus"></i>
                    {/* <i class="fas fa-minus"></i> */}
                  </a>
                  <div className="answer">
                    <p>
                    NFTs is an acronym for Non-Fungible Tokens.
                    Non-Fungible in the sense that they are unique and cannot be interchanged like fungible assets such as Bitcoin. 
                    NFTs are digital assets that are usually representations of real-world objects such as in-game items, videos, music, collectibles, virtual assets, and arts. 
                    These crypto-assets are largely part of the Ethereum network, however, there have been other versions of NTFs implemented on other blockchains.
                    </p>
                  </div>
                </div>
                <div className="accordion-item" id="question4">
                  <a className="accordion-link" href="#question4">
                  What is Ethereum?
                    <i class="fas fa-plus"></i>
                    {/* <i class="fas fa-minus"></i> */}
                  </a>
                  <div className="answer">
                    <p>
                    Ethereum is a decentralized, open source, and distributed computing platform that enables the creation of smart contracts and decentralized applications, also known 
                    as dapps.Ethereum brought the first practical solution for smart contracts to the blockchain space. 
                    </p>
                  </div>
                </div>
                <div className="accordion-item" id="question5">
                  <a className="accordion-link" href="#question5">
                  What are NFTs used for?
                    <i class="fas fa-plus"></i>
                    {/*  <i class="fas fa-minus"></i> */}
                  </a>
                  <div className="answer">
                    <p>
                    NFTs can be used to indicate ownership of rare assets which represents real-world items like real estate and artwork.
                    It’s important to note however that purchasing an NFT that includes the copyright of the original artwork does not mean its copyright is automatically transferred 
                    to you. While you can sell the NFT itself, you are prohibited from reproducing or selling its content.
                    </p>
                  </div>
                </div><div className="accordion-item" id="question4">
                <a className="accordion-link" href="#question4">
                Why do we use polygon?
                  <i class="fas fa-plus"></i>
                  {/* <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                  Polygon MATIC is a scalability platform that enables Ethereum-supported blockchains to communicate with one another. It is also used to create new Ethereum blockchains for businesses and institutions needing decentralized payment solutions. The network refers to itself as "Ethereum's internet of blockchains" because one of its primary missions is to support a multichain Ethereum ecosystem. With a large user base, Ethereum's networks are frequently clogged, making transactions expensive for everyone. With these issues on Ethereum and no viable alternative, Polygon has emerged as a hero. This India-based blockchain platform has addressed these issues by implementing an innovative, one-of-a-kind Layer-2 solution, enabling Polygon to use Ethereum for transaction verification at a fraction of the cost. 
                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question5">
                <a className="accordion-link" href="#question5">
                Why do we need to use IPFS?
                  <i class="fas fa-plus"></i>
                  {/*  <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                  IPFS is a file sharing system that can be leveraged to more efficiently store and share large files. It relies on cryptographic hashes that can easily be stored on a blockchain. Nonetheless, IPFS does not permit users to share files with selected parties. This is necessary, if sensitive or personal data needs to be shared.
                  </p>
                </div>
              </div>
             
            
            
          <div className="accordion-item" id="question5">
            <a className="accordion-link" href="#question5">
            Can NFTs be copied?
              <i class="fas fa-plus"></i>
              {/*  <i class="fas fa-minus"></i> */}
            </a>
            <div className="answer">
              <p>
              No, and Yes. While the technology “NFT” cannot be replicated because of security factors inherited from blockchain, the media can be copied easily.
It’s impossible to fake the creator’s wallet even though copying the contents of an NFT can be done.
NFTs contain unique codes — stored on the blockchain in an immutable form — that makes it possible to trace them back to the creator. Read our detailed article here 
on where NFTs are stored.
              </p>
            </div>
          </div>
        
              </div>
            </div>
          </div>
        </div>
      </Container>
      </div>
        </div>
    )
}

export default Faq
