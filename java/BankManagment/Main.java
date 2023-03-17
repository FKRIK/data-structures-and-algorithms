public class Main{
    public static void main(String[] args){
        Client alberto = new Client();
        alberto.setName("Alberto Silveira");
        alberto.setCpf("222.222.222-22");
        alberto.setOccupation("programmer");

        Account albertAccount = new Account(8752, 12345);
        albertAccount.deposit(100);

        // At this point, a connection between
        // the Account[obj] and Client[obj]
        // is being created. 
        albertAccount.setOwner(alberto);

        System.out.println(albertAccount.getOwner().getName());
        System.out.println(albertAccount.getOwner().getCpf());

        
        albertAccount.getOwner().setOccupation("garçom");
        // separando o comando acima em duas linhas
        Client accountOwner = albertAccount.getOwner();
        accountOwner.setOccupation("garçom");
        //System.out.println(albertAccount.getOwner().getOccupation());

        Account account2 = new Account(0015, 28976);
        Account account3 = new Account(0543, 47235);
        System.out.println(Account.getTotal());
    }
}