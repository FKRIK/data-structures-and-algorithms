public class Account{
    private double balance;
    private int agency;
    private int number;
    private Client owner;
    // 👆 indicates that every account has its owner.
    // The connection is created at Main.java
    private static int total;
    // A static property belong to the CLASS,
    // not to any object.

    public Account(int agency, int number){
        Account.total++;
        this.agency = agency;
        this.number = number;
    }

    public void deposit(double value){
        this.balance += value;
    }

    public boolean withdraw(double value){
        if(this.balance >= value){
            this.balance -= value;
            return true;
        }

        return false;
    }

    public boolean transfer(double value, Account receiver){
        if(this.balance >= value){
            this.balance -= value;
            receiver.deposit(value);
            return true;
        }

        return false;
    }

    public double getBalance(){
        return this.balance;
    }

    public int getNumber(){
        return this.number;
    }

    public void setNumber(int number){
        this.number = number;
    }

    public int getAgency(){
        return this.agency;
    }

    public void setAgency(int agency){
        this.agency = agency;
    }

    public void setOwner(Client owner){
        this.owner = owner;
    }

    public Client getOwner(){
        return this.owner;
    }

    public static int getTotal(){
        return Account.total;
    }
}