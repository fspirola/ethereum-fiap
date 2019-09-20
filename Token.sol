pragma solidity >=0.4.26;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract Token is ERC20Detailed, ERC20Pausable, ERC20Mintable, ERC20Burnable {

    uint256 public constant INITIAL_SUPPLY = 0;

    constructor(string memory _name, string memory _symbol, uint8 _decimals) ERC20Detailed(_name, _symbol, _decimals) public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}