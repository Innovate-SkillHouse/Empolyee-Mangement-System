CREATE TABLE [dbo].[User] (
    [Id]        INT          NOT NULL,
    [FirstName] VARCHAR (50) NOT NULL,
    [UserEmail] VARCHAR (50) NOT NULL,
    [Password]  VARCHAR (50) NOT NULL,
    CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED ([Id] ASC)
);

