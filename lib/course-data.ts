export type Question = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};
export type Topic = {
  slug: string;
  number: number;
  title: string;
  strap: string;
  color: string;
  icon: string;
  duration: string;
  objectives: string[];
  sections: { title: string; body: string; callout?: string }[];
  questions: Question[];
};
const Q = (
  q: string,
  options: string[],
  answer: number,
  explanation: string,
): Question => ({ q, options, answer, explanation });
export const topics: Topic[] = [
  {
    slug: "wallet-portfolio",
    number: 1,
    title: "Wallet & portfolio analysis",
    strap: "See the whole wallet, not just the headline balance.",
    color: "#18a96b",
    icon: "WalletCards",
    duration: "8 min",
    objectives: [
      "Separate wallet value from available spending power",
      "Read assets, positions, approvals, and history together",
      "Use Aura insights without giving up custody",
    ],
    sections: [
      {
        title: "Meet Aura: the AI assistant in your wallet",
        body: "Aura is a fully autonomous AI assistant integrated directly into a Web3 wallet. It turns complex crypto activity into a conversation and provides personalized insights and clearer actions. Describe what you want to do, and Aura interprets the wallet context and helps move from understanding to action. The wallet remains yours: Aura works on top of the existing account and cannot act without explicit approval.",
        callout: "Your wallet, your rules, Aura insights.",
      },
      {
        title: "A wallet is more than its headline balance",
        body: "The large number at the top of a wallet is only a snapshot. A complete portfolio view combines token balances, DeFi positions, token approvals and onchain transaction history. Aura interprets these pieces together so you can understand what you own, where it is deployed and which contracts have permission to use it. Aura works over your existing wallet: it does not take custody of your assets.",
      },
      {
        title: "Read allocation before judging performance",
        body: "Allocation shows how exposure is distributed by asset, blockchain and protocol. Aura supports Ethereum and EVM networks including Base, Optimism and Arbitrum, so one portfolio can contain positions across several environments. If the portfolio rises 10%, do not stop at the gain: check debts, protocol exposure and concentration. A large share held in one asset, chain or protocol can make one adverse event affect the whole portfolio.",
        callout:
          "Portfolio value tells you what the wallet is worth now. Allocation and exposure show what could change it next.",
      },
      {
        title: "Available tokens and protocol positions are different",
        body: "Liquid tokens in the wallet may be available to spend immediately. Supplied, staked or liquidity-pool assets sit inside protocol positions and can have withdrawal conditions or additional risks. Borrowed positions also introduce debt, while rewards may be earned but remain unclaimed. Separating these categories prevents the wallet balance from being mistaken for available spending power.",
      },
      {
        title: "Permissions and history add essential context",
        body: "A token approval can authorize a smart contract to spend some or all of a token, so broad or unused approvals deserve review. Onchain history also reveals behavioral signals: recurring swaps, borrowing patterns, frequently used chains and other patterns in past wallet activity. These signals help Aura explain the account, but they are sensitive context and must be handled carefully.",
      },
      {
        title: "Use Aura without giving up privacy or control",
        body: "Aura's local-first direction keeps the first interpretation layer in the user's environment where possible. Only information required for a task should be sent to remote processing, reducing how much raw wallet data leaves the device. To request analysis safely, connect your existing account, verify the chain and review every requested permission. Never provide a seed phrase, private key or exchange password. Aura can interpret and prepare actions, but the user keeps custody and gives final approval.",
        callout:
          "A legitimate portfolio analysis needs a public account connection and reviewed permissions—not your recovery secret.",
      },
    ],
    questions: [
      Q(
        "What is Aura?",
        [
          "A centralized exchange",
          "A fully autonomous AI assistant integrated into a Web3 wallet",
          "A hardware wallet manufacturer",
          "A blockchain network",
        ],
        1,
        "Aura is a fully autonomous AI assistant integrated directly into a Web3 wallet.",
      ),
      Q(
        "What does self-custodial mean in Aura's model?",
        [
          "Aura owns the assets",
          "An exchange holds every key",
          "The user keeps control of the wallet and funds",
          "Transactions need no approval",
        ],
        2,
        "Aura works on top of an existing wallet; control remains with the user.",
      ),
      Q(
        "Why separate liquid tokens from supplied assets?",
        [
          "Supplied assets may be locked in a protocol position",
          "They always have different symbols",
          "Liquid tokens have no price",
          "Supplied assets cannot earn yield",
        ],
        0,
        "Availability and protocol exposure differ even when the underlying asset is the same.",
      ),
      Q(
        "What does chain allocation reveal?",
        [
          "A wallet password",
          "Where portfolio exposure is distributed",
          "The next block producer",
          "A guaranteed return",
        ],
        1,
        "Chain allocation shows where assets and operational risks are concentrated.",
      ),
      Q(
        "Why inspect token approvals?",
        [
          "They can authorize contracts to spend tokens",
          "They determine token color",
          "They replace gas fees",
          "They prove future profit",
        ],
        0,
        "Approvals are permissions and may represent risk if broad or stale.",
      ),
      Q(
        "Which is a behavioral signal?",
        [
          "A token logo",
          "Patterns in past wallet activity",
          "A block's color",
          "A hardware wallet box",
        ],
        1,
        "Transaction patterns can inform interpretation but should be handled carefully.",
      ),
      Q(
        "What is the privacy benefit of local-first interpretation?",
        [
          "It publishes all balances",
          "It reduces raw wallet data leaving the device",
          "It removes user approval",
          "It guarantees token prices",
        ],
        1,
        "Local processing minimizes unnecessary data disclosure.",
      ),
      Q(
        "A portfolio is up 10%. What should be checked next?",
        [
          "Nothing else",
          "Exposure, debts and concentration",
          "Only the wallet name",
          "The seed phrase",
        ],
        1,
        "Headline value alone does not describe leverage or concentration risk.",
      ),
      Q(
        "Which network set is natively associated with Aura's EVM support?",
        [
          "Ethereum, Base, Optimism and Arbitrum",
          "Only Bitcoin",
          "Only Solana",
          "No public chains",
        ],
        0,
        "Aura states support for Ethereum and multiple EVM networks including Base, Optimism and Arbitrum.",
      ),
      Q(
        "What is the safest way to request analysis?",
        [
          "Share a seed phrase",
          "Connect the existing account and review requested permissions",
          "Send funds to an assistant",
          "Disable approvals",
        ],
        1,
        "A legitimate analysis never requires surrendering recovery secrets or custody.",
      ),
    ],
  },
  {
    slug: "position-tracking",
    number: 2,
    title: "Position tracking",
    strap: "Follow what changes after assets enter a protocol.",
    color: "#2782e3",
    icon: "Activity",
    duration: "7 min",
    objectives: [
      "Identify position components",
      "Track collateral, debt and rewards",
      "Recognize health changes early",
    ],
    sections: [
      {
        title: "Aura monitors while the user is away",
        body: "Aura monitors a portfolio, resurfaces opportunities and helps the user act even when they are away. It watches for portfolio changes, new yield opportunities and risk signals. Position tracking is therefore more than a static list: Aura keeps watching relevant wallet context and turns important changes into personalized insights.",
        callout:
          "Aura's AI monitoring is designed to resurface portfolio changes, opportunities and risk signals.",
      },
      {
        title: "Positions have state",
        body: "A DeFi position is not a static token balance. Lending positions combine supplied collateral, borrowed value, interest and a health measure. Liquidity positions add pool share, fees and changing token composition.",
      },
      {
        title: "Track the drivers",
        body: "Watch value, quantity, entry basis, accrued rewards, debt and protocol status. Cross-chain positions also need their source network and contract identified. A change in price can affect both profit and safety.",
      },
      {
        title: "Turn monitoring into decisions",
        body: "Alerts should be tied to an action: investigate a falling health factor, claim meaningful rewards, or rebalance concentration. Aura can explain and prepare an action, but execution still requires the user’s approval.",
        callout:
          "An alert is useful only when it explains the changed variable and the possible response.",
      },
    ],
    questions: [
      Q(
        "What can Aura's AI monitoring resurface?",
        [
          "Portfolio changes, opportunities and risk signals",
          "Only password reminders",
          "Social-media likes",
          "Guaranteed profits",
        ],
        0,
        "Aura says its assistant can monitor a portfolio and resurface opportunities, portfolio changes and risk signals.",
      ),
      Q(
        "What should be tracked for a lending position?",
        [
          "Collateral, debt, interest and health",
          "Only logo",
          "Only username",
          "Mining hardware",
        ],
        0,
        "Those variables determine value and liquidation safety.",
      ),
      Q(
        "Why can a price drop threaten a borrower?",
        [
          "It can reduce collateral value relative to debt",
          "It changes email address",
          "It removes all gas",
          "It increases every reward",
        ],
        0,
        "A weaker collateral ratio can approach liquidation thresholds.",
      ),
      Q(
        "What does a liquidity-pool share represent?",
        [
          "Ownership of a portion of pooled assets",
          "A guaranteed fixed return",
          "A wallet recovery phrase",
          "A bridge receipt only",
        ],
        0,
        "LP shares correspond to a portion of the pool and its fees.",
      ),
      Q(
        "Which is a meaningful position alert?",
        [
          "Health factor nearing a danger threshold",
          "Token icon changed color",
          "It is Tuesday",
          "Wallet has a nickname",
        ],
        0,
        "Health deterioration can require prompt review.",
      ),
      Q(
        "Why record the source chain?",
        [
          "The same asset can sit in different contracts and risk environments",
          "Chains are identical",
          "It creates profit",
          "It replaces the contract address",
        ],
        0,
        "Chain and contract context identify the actual position.",
      ),
      Q(
        "What can accrued rewards change?",
        [
          "The position's total return",
          "The seed phrase",
          "The chain's consensus",
          "The user's email",
        ],
        0,
        "Unclaimed incentives are part of economic performance.",
      ),
      Q(
        "Who gives final approval for an Aura-prepared position action?",
        [
          "The user",
          "Aura without asking",
          "A random validator",
          "The token issuer",
        ],
        0,
        "Aura prepares; the user explicitly approves execution.",
      ),
      Q(
        "A good alert should include what?",
        [
          "Changed variable, context and possible response",
          "Only an emoji",
          "A recovery phrase request",
          "A guaranteed outcome",
        ],
        0,
        "Context makes the alert actionable.",
      ),
      Q(
        "Which metric best indicates leveraged-position safety?",
        [
          "Health factor or collateral ratio",
          "Token name length",
          "Wallet age alone",
          "Number of browser tabs",
        ],
        0,
        "Collateralization metrics show proximity to liquidation.",
      ),
    ],
  },
  {
    slug: "swaps-trading",
    number: 3,
    title: "Swaps & trading",
    strap: "Compare routes, costs and outcomes before signing.",
    color: "#f28c28",
    icon: "ArrowLeftRight",
    duration: "9 min",
    objectives: [
      "Read a swap quote",
      "Understand slippage and price impact",
      "Review approvals before trading",
    ],
    sections: [
      {
        title: "Trading through conversation",
        body: "Send, swap or trade by describing what you want to do. Aura turns the request into clearer actions and helps complete the task from the wallet. This conversational layer reduces complexity without taking away user control: every execution-related action still requires explicit approval.",
        callout:
          "Aura can interpret the request and prepare the action; the user approves execution.",
      },
      {
        title: "A quote is a proposed outcome",
        body: "A swap quote names the input, expected output, route, network fee, protocol fees, price impact and deadline. Compare net received, not just a headline rate.",
      },
      {
        title: "Slippage protects the boundary",
        body: "Slippage tolerance defines how far execution may move from the quote before reverting. Very low tolerance can fail in volatile markets; very high tolerance accepts a worse outcome and increases exposure to adverse execution.",
      },
      {
        title: "Review before approve",
        body: "Confirm token addresses, chain, amount, spender approval and minimum received. Aura can route and prepare swaps or trades from a natural-language request, but it cannot execute without explicit user approval.",
        callout:
          "Simulation explains an expected result; your signature authorizes the real transaction.",
      },
    ],
    questions: [
      Q(
        "How does Aura let a user request a swap or trade?",
        [
          "By describing what they want to do",
          "By surrendering their wallet",
          "Only by writing contract code",
          "By sending Aura a private key",
        ],
        0,
        "With Aura, users can send, swap or trade by simply describing what they want to do.",
      ),
      Q(
        "What is slippage tolerance?",
        [
          "Maximum acceptable movement from the quote",
          "A guaranteed gain",
          "The gas token symbol",
          "A login method",
        ],
        0,
        "It sets an execution boundary.",
      ),
      Q(
        "What can very high slippage allow?",
        [
          "A materially worse execution price",
          "Free gas forever",
          "No token approval",
          "Guaranteed output",
        ],
        0,
        "A loose boundary can accept a poor fill.",
      ),
      Q(
        "What is price impact?",
        [
          "The trade's effect on the pool price",
          "The wallet's battery use",
          "Email delivery time",
          "Bridge finality",
        ],
        0,
        "Larger trades relative to liquidity move the market.",
      ),
      Q(
        "Why verify the token contract?",
        [
          "Different tokens can share names or symbols",
          "It lowers every fee",
          "It changes custody",
          "It creates liquidity",
        ],
        0,
        "The address identifies the real asset.",
      ),
      Q(
        "What does minimum received express?",
        [
          "The lowest output accepted at execution",
          "The wallet balance",
          "Maximum gas",
          "A staking lock",
        ],
        0,
        "It is the concrete output protection derived from slippage.",
      ),
      Q(
        "What may require a separate transaction before an ERC-20 swap?",
        ["Token approval", "Email change", "Bridge finality", "NFT mint"],
        0,
        "A spender often needs an allowance before swapping.",
      ),
      Q(
        "Who signs an Aura-prepared swap?",
        ["The user", "Aura silently", "The liquidity pool", "PayAI"],
        0,
        "The user retains final control.",
      ),
      Q(
        "Why can a quote expire?",
        [
          "Market and gas conditions change",
          "Token names fade",
          "Wallets stop existing",
          "Blocks have passwords",
        ],
        0,
        "Quotes depend on time-sensitive state.",
      ),
      Q(
        "Which request is clearest?",
        [
          "Swap 0.2 ETH to USDC on Base with 0.5% max slippage",
          "Make me rich",
          "Do anything",
          "Use my seed phrase",
        ],
        0,
        "Specific asset, amount, chain and constraint reduce ambiguity.",
      ),
    ],
  },
  {
    slug: "bridging",
    number: 4,
    title: "Bridging between chains",
    strap: "Move value with the right route, timing and destination.",
    color: "#a15bd5",
    icon: "Waypoints",
    duration: "8 min",
    objectives: [
      "Distinguish bridging from swapping",
      "Check destination requirements",
      "Understand finality and route risk",
    ],
    sections: [
      {
        title: "Aura's cross-chain assistant",
        body: "Instant swaps and a one-click bridge make cross-chain portfolio management easier. Aura translates the intended movement into a clear action across supported EVM networks: Ethereum, Base, Optimism, Arbitrum, Scroll, BNB Chain and Gnosis. Bitcoin and Solana support are planned for the future.",
        callout:
          "Aura simplifies the bridge flow, but the user still gives final approval.",
      },
      {
        title: "Bridges move chain context",
        body: "A bridge transfers or represents value from a source chain to a destination chain. It is not automatically a swap: the asset may remain economically the same while its chain and contract representation change.",
      },
      {
        title: "Review both sides",
        body: "Confirm source and destination networks, token representation, recipient, fees, estimated time and minimum received. Keep enough source gas to submit and, where needed, destination gas to use the received asset.",
      },
      {
        title: "Finality takes time",
        body: "Routes can use canonical messaging, liquidity providers or other mechanisms, each with different trust, cost and timing. Do not treat a source confirmation as proof that destination funds are ready.",
        callout:
          "Track the bridge transfer until the destination transaction is finalized.",
      },
    ],
    questions: [
      Q(
        "Which bridge experience does Aura advertise?",
        [
          "A one-click bridge for cross-chain assets",
          "A bridge requiring custody transfer",
          "A Bitcoin-only bridge already live",
          "A bridge without user approval",
        ],
        0,
        "Aura provides a one-click bridge for cross-chain assets.",
      ),
      Q(
        "Is bridging always the same as swapping?",
        [
          "No, the asset may remain economically the same",
          "Yes, always",
          "Only on weekends",
          "Only for NFTs",
        ],
        0,
        "Chain movement and asset exchange are distinct operations.",
      ),
      Q(
        "What must be verified first?",
        [
          "Source and destination chains",
          "Screen brightness",
          "Profile photo",
          "Token popularity",
        ],
        0,
        "A wrong network choice can strand or lose funds.",
      ),
      Q(
        "Why keep source-chain gas?",
        [
          "To pay for submitting required transactions",
          "To change the token logo",
          "To verify email",
          "To create a password",
        ],
        0,
        "The source operation needs network fees.",
      ),
      Q(
        "When is a bridge complete?",
        [
          "When funds are finalized on the destination",
          "When the tab closes",
          "Immediately after quote",
          "When email arrives",
        ],
        0,
        "Destination finality is the relevant completion state.",
      ),
      Q(
        "What can differ by bridge route?",
        [
          "Trust assumptions, fees and time",
          "User's legal name",
          "Token spelling only",
          "Browser language",
        ],
        0,
        "Bridge mechanisms have different risk and performance profiles.",
      ),
      Q(
        "Why check destination token representation?",
        [
          "Bridged and native versions may use different contracts",
          "All contracts are identical",
          "It removes finality",
          "It guarantees liquidity",
        ],
        0,
        "Contract identity matters for usability and liquidity.",
      ),
      Q(
        "What should recipient verification prevent?",
        [
          "Sending to the wrong address",
          "Gas estimation",
          "Price discovery",
          "Email verification",
        ],
        0,
        "The destination address is often irreversible.",
      ),
      Q(
        "Can Aura bridge without the user's approval?",
        ["No", "Yes, at any time", "Only large amounts", "Only stablecoins"],
        0,
        "Execution-related actions require explicit approval.",
      ),
      Q(
        "What is a sensible first bridge test?",
        [
          "Send a small amount and confirm destination receipt",
          "Send the entire portfolio",
          "Ignore fees",
          "Share a seed phrase",
        ],
        0,
        "A small test validates the route and destination.",
      ),
    ],
  },
  {
    slug: "yield-discovery",
    number: 5,
    title: "Yield discovery",
    strap: "Look past APY to understand where returns come from.",
    color: "#e3b328",
    icon: "Sprout",
    duration: "9 min",
    objectives: [
      "Separate base yield from incentives",
      "Compare net, risk-adjusted opportunities",
      "Spot unsustainable rewards",
    ],
    sections: [
      {
        title: "Smart Yield is AI-driven discovery",
        body: "Aura calls its yield feature Smart Yield: AI-driven discovery of the best APY across chains. The assistant can monitor for new yield opportunities, resurface them and help the user act. Aura places this alongside portfolio management, swaps, bridges and built-in risk protection, so yield discovery is presented as one part of an AI-assisted wallet experience rather than a separate generic search tool.",
        callout:
          "Smart Yield uses AI to discover APY opportunities across chains.",
      },
      {
        title: "Yield has a source",
        body: "Returns may come from borrower interest, trading fees, staking rewards or token incentives. Identify the source before comparing percentages. Incentive-heavy APY may fall when emissions or token prices change.",
      },
      {
        title: "Compare like with like",
        body: "Account for lockups, withdrawal conditions, compounding assumptions, network fees, reward-token volatility and smart-contract exposure. The best headline APY is not necessarily the best net outcome.",
      },
      {
        title: "Discovery before execution",
        body: "Aura can compare opportunities against wallet holdings and user constraints, then prepare the chosen deposit. Product revenue associated with Aura's wider ecosystem includes security and discovery deposits, recommendation boosting and premium features.",
        callout:
          "A yield percentage without a source, timeframe and risk description is incomplete.",
      },
    ],
    questions: [
      Q(
        "What is Aura's Smart Yield feature?",
        [
          "AI-driven discovery of the best APY across chains",
          "A guaranteed fixed return",
          "A separate hardware device",
          "A password manager",
        ],
        0,
        "Smart Yield uses AI to discover the best APY across chains.",
      ),
      Q(
        "Why can incentive APY fall?",
        [
          "Emissions or reward-token price can change",
          "APY is fixed by definition",
          "Wallets stop calculating",
          "Gas becomes impossible",
        ],
        0,
        "Incentive value is variable.",
      ),
      Q(
        "What does net yield subtract?",
        [
          "Fees and relevant costs",
          "Only token decimals",
          "The protocol name",
          "Wallet age",
        ],
        0,
        "Costs reduce realized return.",
      ),
      Q(
        "Why inspect lockups?",
        [
          "They limit when funds can be withdrawn",
          "They guarantee profit",
          "They remove contract risk",
          "They verify identity",
        ],
        0,
        "Liquidity constraints affect suitability.",
      ),
      Q(
        "What makes two APYs hard to compare?",
        [
          "Different compounding, timeframes and risks",
          "Different font sizes",
          "Same asset",
          "Same chain",
        ],
        0,
        "Calculation methods and exposures matter.",
      ),
      Q(
        "What risk accompanies reward tokens?",
        [
          "Their market value may fall",
          "They cannot be transferred",
          "They remove gas",
          "They are always stable",
        ],
        0,
        "Volatile rewards can erode realized yield.",
      ),
      Q(
        "What should happen before a yield deposit executes?",
        [
          "User reviews and approves the prepared transaction",
          "Aura signs secretly",
          "The seed phrase is uploaded",
          "Every asset is bridged",
        ],
        0,
        "The user controls execution.",
      ),
      Q(
        "A 40% APY is mostly emissions. What is the key question?",
        [
          "Are emissions and token value sustainable?",
          "Is the card green?",
          "Is the name short?",
          "Can approval be skipped?",
        ],
        0,
        "Return quality depends on its source.",
      ),
      Q(
        "Which activity contributes to Aura ecosystem product revenue?",
        [
          "Security and discovery deposits",
          "Printing seed phrases",
          "Selling wallet keys",
          "Block mining hardware",
        ],
        0,
        "Security and discovery deposits are part of Aura's product-revenue model.",
      ),
      Q(
        "What is risk-adjusted comparison?",
        [
          "Considering return together with loss and liquidity risks",
          "Choosing the largest number",
          "Ignoring fees",
          "Assuming all protocols are equal",
        ],
        0,
        "Expected return must be weighed against uncertainty and downside.",
      ),
    ],
  },
  {
    slug: "risk-analysis",
    number: 6,
    title: "Risk analysis",
    strap: "Turn uncertainty into checks you can act on.",
    color: "#e45757",
    icon: "ShieldCheck",
    duration: "10 min",
    objectives: [
      "Map smart-contract and market risks",
      "Understand privacy safeguards",
      "Keep approval as the final control",
    ],
    sections: [
      {
        title: "Why AI security and privacy matter to Aura",
        body: "Aura's AI works with wallet onchain history, portfolio state and transaction preparation. It helps users understand assets, assess risk, compare opportunities and prepare actions. Security depends on careful code review, clear approval flows and tight handling of wallet data. Continuous AI-assisted review checks the application code as it changes and shortens the gap between a code change and a security check.",
        callout:
          "Aura uses AI both in the wallet assistant and as an added layer of continuous code review.",
      },
      {
        title: "Risk has layers",
        body: "Review smart-contract, market, liquidity, oracle, bridge, governance and operational risks. Concentration can amplify any one failure. Audits are useful evidence, not a guarantee that code or integrations are bug-free.",
      },
      {
        title: "Aura's security direction",
        body: "The inherited AdEx ecosystem and ADX contracts have a long operating history and third-party audits including CertiK. Aura is also setting up continuous AI-assisted code review to shorten the gap between code changes and security checks.",
      },
      {
        title: "Privacy and approval",
        body: "Sensitive wallet context should stay local where possible; remote systems should receive only task-required data. Aura may assess and prepare swaps, bridges or trades, but the user must explicitly approve the final action.",
        callout:
          "Never share a seed phrase or private key. A legitimate assistant does not need it.",
      },
    ],
    questions: [
      Q(
        "How does Aura use AI in its code-review process?",
        [
          "It continuously reviews application code as it changes",
          "It guarantees that bugs are impossible",
          "It reviews only wallet balances",
          "It removes the need for authentication",
        ],
        0,
        "Aura is setting up continuous AI-assisted review to shorten the gap between code changes and security checks.",
      ),
      Q(
        "What does continuous review improve?",
        [
          "The time between code changes and security checks",
          "Token price certainty",
          "Wallet custody transfer",
          "Bridge speed",
        ],
        0,
        "Ongoing review addresses evolving code.",
      ),
      Q(
        "Which is market risk?",
        [
          "Collateral price falls sharply",
          "A typo in CSS",
          "An email arrives late",
          "A logo changes",
        ],
        0,
        "Price changes can cause loss or liquidation.",
      ),
      Q(
        "Which is smart-contract risk?",
        [
          "A bug allows unintended fund movement",
          "Reward price falls",
          "Network fee rises",
          "User forgets a lesson",
        ],
        0,
        "Code defects are contract risk.",
      ),
      Q(
        "Why is concentration risky?",
        [
          "One failure can affect a large share of the portfolio",
          "It lowers all prices",
          "It removes approvals",
          "It verifies identity",
        ],
        0,
        "Concentrated exposure magnifies a single event.",
      ),
      Q(
        "What should remote processing receive?",
        [
          "Only data required for the task",
          "Every raw wallet detail",
          "The private key",
          "The recovery phrase",
        ],
        0,
        "Data minimization reduces the wallet information sent away from the user's environment.",
      ),
      Q(
        "What is the final execution safeguard?",
        [
          "Explicit user approval",
          "A colorful dashboard",
          "Automatic signing",
          "A social post",
        ],
        0,
        "The final decision remains with the user.",
      ),
      Q(
        "Which security company audited ADX?",
        ["CertiK", "PayAI", "Quizlet", "Vercel"],
        0,
        "CertiK is one of the auditors behind Aura's inherited ADX security baseline.",
      ),
      Q(
        "What secret should never be entered into an assistant?",
        [
          "Seed phrase or private key",
          "Public wallet address",
          "Transaction hash",
          "Token symbol",
        ],
        0,
        "Recovery secrets provide control of funds.",
      ),
      Q(
        "What does liquidity risk mean?",
        [
          "Exiting may cause delay or a poor price",
          "The wallet changes color",
          "Email needs confirmation",
          "A chain has blocks",
        ],
        0,
        "Insufficient liquidity harms exit execution.",
      ),
    ],
  },
  {
    slug: "transaction-preparation",
    number: 7,
    title: "Transaction preparation",
    strap: "Know exactly what your wallet is being asked to sign.",
    color: "#087d72",
    icon: "FileCheck2",
    duration: "9 min",
    objectives: [
      "Read simulation and calldata intent",
      "Check gas, approvals and recipients",
      "Distinguish preparation from execution",
    ],
    sections: [
      {
        title: "From an AI request to a prepared transaction",
        body: "Aura connects understanding with action. It works with wallet state and transaction preparation, allowing a user to describe an intended send, swap or trade conversationally. Aura prepares the execution-related action, but user approval remains the final phase. Preparation by the AI is not permission to move funds.",
        callout:
          "The assistant prepares; the connected wallet asks the user to approve.",
      },
      {
        title: "Preparation turns intent into a proposal",
        body: "Aura can translate a request into one or more unsigned transactions. A useful preview explains the target contract, method, assets moving, approvals, recipient, expected result and network fees in human language.",
      },
      {
        title: "Simulate, then verify",
        body: "Simulation estimates whether the current state will succeed and how balances may change. It is not a guarantee: onchain state, price and gas can move before inclusion. Check chain, nonce, deadline and minimum outputs.",
      },
      {
        title: "Signing is the boundary",
        body: "Preparation does not move funds. The connected wallet displays the request and the user decides whether to sign. The PayAI integration adds verified x402 settlement when Aura needs paid tools, infrastructure or external services.",
        callout: "Read the effect, not only the transaction label.",
      },
    ],
    questions: [
      Q(
        "What is the boundary between Aura's AI preparation and execution?",
        [
          "The user must explicitly approve the action",
          "Aura executes every prepared action automatically",
          "PayAI replaces user approval",
          "Preparation transfers wallet custody",
        ],
        0,
        "Aura can prepare execution-related actions, but user approval always remains the final phase.",
      ),
      Q(
        "What should a transaction preview explain?",
        [
          "Contract, method, assets, recipient and expected effect",
          "Only a transaction name",
          "The seed phrase",
          "A guaranteed profit",
        ],
        0,
        "A human-readable preview supports informed approval.",
      ),
      Q(
        "What does simulation provide?",
        [
          "An estimate based on current state",
          "A permanent guarantee",
          "A private key",
          "A completed bridge",
        ],
        0,
        "State can change after simulation.",
      ),
      Q(
        "Why check the chain?",
        [
          "Signing on the wrong network can produce the wrong or failed action",
          "It changes email",
          "All chains are identical",
          "It guarantees low fees",
        ],
        0,
        "Network context is fundamental.",
      ),
      Q(
        "What is gas used for?",
        [
          "Paying the network to process computation",
          "Setting slippage",
          "Verifying an email",
          "Creating a token logo",
        ],
        0,
        "Gas compensates network execution.",
      ),
      Q(
        "What does an ERC-20 approval authorize?",
        [
          "A spender to use tokens within an allowance",
          "Aura to know a password",
          "A bridge to finalize instantly",
          "A user to avoid gas",
        ],
        0,
        "Allowances grant token spending permission.",
      ),
      Q(
        "What might invalidate an old simulation?",
        [
          "Onchain state or price changes",
          "A page scroll",
          "A profile image",
          "Lesson progress",
        ],
        0,
        "Simulations are time-sensitive.",
      ),
      Q(
        "What does PayAI facilitate for Aura?",
        [
          "Verification and settlement of x402 payments",
          "Wallet seed storage",
          "Guaranteed trades",
          "Block production",
        ],
        0,
        "PayAI handles the payment layer for paid external services.",
      ),
      Q(
        "What is x402 connected to?",
        [
          "HTTP 402 Payment Required and digital-currency payments",
          "An NFT image format",
          "A consensus algorithm",
          "An email protocol",
        ],
        0,
        "x402 enables API/content payment flows.",
      ),
      Q(
        "What is the last step before execution?",
        [
          "The user reviews and explicitly approves",
          "Aura hides the details",
          "A random service signs",
          "The quiz auto-signs",
        ],
        0,
        "The user remains the final authority.",
      ),
    ],
  },
  {
    slug: "multi-step-workflows",
    number: 8,
    title: "Multi-step workflows",
    strap:
      "Coordinate approvals, dependencies and recovery across a complete goal.",
    color: "#5c5bd6",
    icon: "Workflow",
    duration: "11 min",
    objectives: [
      "Break goals into dependent actions",
      "Review every approval boundary",
      "Track partial success and recovery",
    ],
    sections: [
      {
        title: "Aura as an agent-driven workflow",
        body: "In an agent-driven workflow, Aura interprets a goal, works with wallet data and transaction routing, prepares actions and interacts with services. For example, the prompt “Migrate my existing adx-staking position into stkADX” starts the required migration flow. Aura handles the coordination, while the user approves the transactions.",
        callout:
          "Agent-driven does not mean approval-free: the final decision remains with the user.",
      },
      {
        title: "Goals become ordered actions",
        body: "A workflow may require approval, swap, bridge, deposit and confirmation steps. Each step has prerequisites and outputs. The system should show the plan before execution and pause at signing boundaries.",
      },
      {
        title: "Handle partial completion",
        body: "Onchain steps do not always succeed together. If a bridge completes but a deposit fails, the workflow should report where funds are now and offer a safe next action rather than repeating completed steps.",
      },
      {
        title: "Aura example: ADX migration",
        body: "The prompt “Migrate my existing adx-staking position into stkADX” becomes the required set of transactions, which the user still approves. The new unified pool adds product access, revenue sharing and governance rights. Migration begins with a penalty-free grace period, followed by a penalty window that increases daily.",
        callout:
          "Automation should reduce coordination work, never hide irreversible decisions.",
      },
    ],
    questions: [
      Q(
        "What does Aura do with the ADX migration prompt?",
        [
          "Handles the workflow while the user approves the transactions",
          "Takes custody of the staked position",
          "Skips every approval",
          "Guarantees the ADX market price",
        ],
        0,
        "Aura handles the migration flow, while the user approves the transactions.",
      ),
      Q(
        "When should the plan be shown?",
        [
          "Before execution begins",
          "Only after failure",
          "Never",
          "After funds leave",
        ],
        0,
        "Preview supports informed decisions.",
      ),
      Q(
        "What should happen at a signing boundary?",
        [
          "Pause for explicit user approval",
          "Sign automatically",
          "Hide the contract",
          "Share the private key",
        ],
        0,
        "User approval remains mandatory.",
      ),
      Q(
        "A bridge succeeds but deposit fails. What is correct?",
        [
          "Report current fund location and resume from the failed step",
          "Repeat the bridge blindly",
          "Claim everything failed",
          "Hide the result",
        ],
        0,
        "Recovery must respect completed state.",
      ),
      Q(
        "What can serve as a step prerequisite?",
        [
          "Sufficient token allowance or balance",
          "A green button",
          "A profile photo",
          "A quiz title",
        ],
        0,
        "Transactions depend on state and permissions.",
      ),
      Q(
        "Which prompt starts the Aura staking migration workflow?",
        [
          "Migrate my existing adx-staking position into stkADX",
          "Delete my wallet",
          "Reveal my private key",
          "Guarantee token price",
        ],
        0,
        "This prompt starts Aura's natural-language staking migration workflow.",
      ),
      Q(
        "What does the new unified staking model add?",
        [
          "Product access, revenue sharing and governance rights",
          "Free private keys",
          "Guaranteed token price",
          "No approvals",
        ],
        0,
        "These are the benefits described in Aura's migration update.",
      ),
      Q(
        "What followed the penalty-free migration grace period?",
        [
          "A daily-increasing penalty window",
          "Permanent free migration",
          "Automatic wallet custody",
          "An NFT auction",
        ],
        0,
        "After the grace period, the migration penalty rises daily until it reaches its maximum.",
      ),
      Q(
        "Why avoid repeating completed steps?",
        [
          "It can duplicate transfers or costs",
          "It changes fonts",
          "It verifies email twice",
          "It makes lessons shorter",
        ],
        0,
        "Onchain actions can be irreversible and costly.",
      ),
      Q(
        "What is the best workflow completion evidence?",
        [
          "Confirmed final state for every required step",
          "A loading spinner",
          "A prepared transaction only",
          "A social post",
        ],
        0,
        "Completion depends on verified outcomes, not just intent.",
      ),
    ],
  },
];
export const getTopic = (slug: string) => topics.find((t) => t.slug === slug);
