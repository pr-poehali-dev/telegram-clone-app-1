import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
  online: boolean;
  type: 'personal' | 'group' | 'channel';
  members?: number;
}

interface Message {
  id: number;
  text: string;
  time: string;
  isMine: boolean;
  type?: 'text' | 'voice' | 'image';
  duration?: string;
}

const Index = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoDownload, setAutoDownload] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const chats: Chat[] = [
    {
      id: 1,
      name: 'Анна Смирнова',
      lastMessage: 'Отлично, давай созвонимся!',
      time: '14:23',
      unread: 2,
      avatar: '',
      online: true,
      type: 'personal'
    },
    {
      id: 2,
      name: 'Разработчики React',
      lastMessage: 'Новая версия библиотеки',
      time: '13:45',
      unread: 0,
      avatar: '',
      online: false,
      type: 'group',
      members: 2547
    },
    {
      id: 3,
      name: 'Дизайн и UX',
      lastMessage: 'Обсуждение трендов 2024',
      time: '12:10',
      unread: 0,
      avatar: '',
      online: false,
      type: 'channel',
      members: 15230
    },
    {
      id: 4,
      name: 'Иван Петров',
      lastMessage: 'Спасибо за помощь!',
      time: '11:30',
      unread: 0,
      avatar: '',
      online: true,
      type: 'personal'
    },
    {
      id: 5,
      name: 'Стартапы России',
      lastMessage: 'Митап в эту субботу',
      time: 'Вчера',
      unread: 5,
      avatar: '',
      online: false,
      type: 'group',
      members: 542
    }
  ];

  const messages: Message[] = [
    { id: 1, text: 'Привет! Как дела?', time: '14:20', isMine: false, type: 'text' },
    { id: 2, text: 'Привет! Всё отлично, работаю над проектом 🚀', time: '14:21', isMine: true, type: 'text' },
    { id: 3, text: '', time: '14:22', isMine: false, type: 'voice', duration: '0:15' },
    { id: 4, text: 'Круто! Можем обсудить детали?', time: '14:22', isMine: false, type: 'text' },
    { id: 5, text: 'Отлично, давай созвонимся!', time: '14:23', isMine: false, type: 'text' }
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessageText('');
    }
  };

  const startVideoCall = () => {
    setIsVideoCall(true);
  };

  const endVideoCall = () => {
    setIsVideoCall(false);
    setIsScreenSharing(false);
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const selectedChatData = chats.find(c => c.id === selectedChat);

  const ChatItem = ({ chat }: { chat: Chat }) => (
    <button
      onClick={() => setSelectedChat(chat.id)}
      className={`w-full p-3 rounded-2xl mb-1 transition-all duration-200 hover:bg-muted ${
        selectedChat === chat.id ? 'bg-muted' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="relative">
          <Avatar className="w-12 h-12">
            <AvatarImage src={chat.avatar} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
              {chat.type === 'channel' ? '📢' : chat.type === 'group' ? '👥' : chat.name.split(' ').map((n) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {chat.online && chat.type === 'personal' && (
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-card rounded-full" />
          )}
        </div>
        <div className="flex-1 text-left min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm truncate">{chat.name}</span>
              {chat.type === 'channel' && (
                <Icon name="Volume2" size={14} className="text-muted-foreground" />
              )}
            </div>
            <span className="text-xs text-muted-foreground">{chat.time}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground truncate">
              {chat.type === 'group' && '👥 '}
              {chat.lastMessage}
            </p>
            {chat.unread > 0 && (
              <Badge className="ml-2 bg-primary text-white rounded-full px-2 py-0 text-xs">
                {chat.unread}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </button>
  );

  return (
    <div className="flex h-screen bg-background text-foreground">
      {!isVideoCall ? (
        <>
          <div className="w-80 border-r border-border bg-card flex flex-col">
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between mb-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full"
                  onClick={() => setShowProfile(!showProfile)}
                >
                  <Icon name="Menu" size={20} />
                </Button>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Telegram
                </h1>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <Icon name="Search" size={20} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Поиск</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4">
                      <Input placeholder="Искать сообщения..." className="rounded-2xl" />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            <Tabs defaultValue="all" className="flex-1 flex flex-col">
              <TabsList className="w-full justify-start rounded-none border-b border-border px-2 bg-transparent">
                <TabsTrigger value="all" className="rounded-2xl">Все</TabsTrigger>
                <TabsTrigger value="personal" className="rounded-2xl">Личные</TabsTrigger>
                <TabsTrigger value="groups" className="rounded-2xl">Группы</TabsTrigger>
                <TabsTrigger value="channels" className="rounded-2xl">Каналы</TabsTrigger>
              </TabsList>

              <ScrollArea className="flex-1">
                <div className="p-2">
                  <TabsContent value="all" className="m-0">
                    {chats.map((chat) => <ChatItem key={chat.id} chat={chat} />)}
                  </TabsContent>
                  <TabsContent value="personal" className="m-0">
                    {chats.filter(c => c.type === 'personal').map((chat) => <ChatItem key={chat.id} chat={chat} />)}
                  </TabsContent>
                  <TabsContent value="groups" className="m-0">
                    {chats.filter(c => c.type === 'group').map((chat) => <ChatItem key={chat.id} chat={chat} />)}
                  </TabsContent>
                  <TabsContent value="channels" className="m-0">
                    {chats.filter(c => c.type === 'channel').map((chat) => <ChatItem key={chat.id} chat={chat} />)}
                  </TabsContent>
                </div>
              </ScrollArea>
            </Tabs>
          </div>

          <div className="flex-1 flex flex-col">
            {selectedChat && selectedChatData ? (
              <>
                <div className="p-4 border-b border-border bg-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                          {selectedChatData.type === 'channel' ? '📢' : selectedChatData.type === 'group' ? '👥' : 'АС'}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="font-semibold">{selectedChatData.name}</h2>
                        <p className="text-xs text-muted-foreground">
                          {selectedChatData.type === 'personal' && selectedChatData.online && 'онлайн'}
                          {selectedChatData.type === 'group' && `${selectedChatData.members} участников`}
                          {selectedChatData.type === 'channel' && `${selectedChatData.members} подписчиков`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedChatData.type === 'personal' && (
                        <>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="rounded-full hover:bg-primary/10"
                            onClick={startVideoCall}
                          >
                            <Icon name="Video" size={20} className="text-primary" />
                          </Button>
                          <Button size="icon" variant="ghost" className="rounded-full hover:bg-accent/10">
                            <Icon name="Phone" size={20} className="text-accent" />
                          </Button>
                        </>
                      )}
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button size="icon" variant="ghost" className="rounded-full">
                            <Icon name="MoreVertical" size={20} />
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>Информация о чате</SheetTitle>
                          </SheetHeader>
                          <div className="mt-6 space-y-4">
                            <div className="flex flex-col items-center">
                              <Avatar className="w-24 h-24 mb-4">
                                <AvatarImage src="" />
                                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-3xl">
                                  {selectedChatData.type === 'channel' ? '📢' : selectedChatData.type === 'group' ? '👥' : 'АС'}
                                </AvatarFallback>
                              </Avatar>
                              <h3 className="text-xl font-bold">{selectedChatData.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {selectedChatData.type === 'group' && `Группа · ${selectedChatData.members} участников`}
                                {selectedChatData.type === 'channel' && `Канал · ${selectedChatData.members} подписчиков`}
                                {selectedChatData.type === 'personal' && selectedChatData.online && 'онлайн'}
                              </p>
                            </div>
                            <Separator />
                            <div className="space-y-2">
                              <Button variant="ghost" className="w-full justify-start">
                                <Icon name="Bell" size={18} className="mr-3" />
                                Уведомления
                              </Button>
                              <Button variant="ghost" className="w-full justify-start">
                                <Icon name="Search" size={18} className="mr-3" />
                                Поиск в чате
                              </Button>
                              {selectedChatData.type !== 'personal' && (
                                <Button variant="ghost" className="w-full justify-start">
                                  <Icon name="Users" size={18} className="mr-3" />
                                  Участники
                                </Button>
                              )}
                            </div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </div>

                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-4 max-w-4xl mx-auto">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isMine ? 'justify-end' : 'justify-start'} animate-slide-up`}
                      >
                        {message.type === 'voice' ? (
                          <div
                            className={`flex items-center gap-2 rounded-3xl px-4 py-3 ${
                              message.isMine
                                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                                : 'bg-muted text-foreground'
                            }`}
                          >
                            <Button
                              size="icon"
                              variant="ghost"
                              className="w-8 h-8 rounded-full hover:bg-white/20"
                            >
                              <Icon name="Play" size={16} />
                            </Button>
                            <div className="flex items-center gap-2">
                              <div className="h-8 flex items-center gap-0.5">
                                {[...Array(20)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-0.5 bg-current rounded-full"
                                    style={{ height: `${Math.random() * 100}%` }}
                                  />
                                ))}
                              </div>
                              <span className="text-xs">{message.duration}</span>
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`max-w-md rounded-3xl px-4 py-3 ${
                              message.isMine
                                ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-br-md'
                                : 'bg-muted text-foreground rounded-bl-md'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <span
                              className={`text-xs mt-1 block ${
                                message.isMine ? 'text-white/70' : 'text-muted-foreground'
                              }`}
                            >
                              {message.time}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="p-4 border-t border-border bg-card">
                  <div className="flex items-center gap-2 max-w-4xl mx-auto">
                    <Button size="icon" variant="ghost" className="rounded-full shrink-0">
                      <Icon name="Paperclip" size={20} />
                    </Button>
                    <div className="flex-1 relative">
                      <Input
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Сообщение..."
                        className="bg-background border-border rounded-3xl pr-12"
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
                      >
                        <Icon name="Smile" size={20} />
                      </Button>
                    </div>
                    {messageText.trim() ? (
                      <Button
                        onClick={handleSendMessage}
                        size="icon"
                        className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shrink-0"
                      >
                        <Icon name="Send" size={20} />
                      </Button>
                    ) : (
                      <Button
                        onClick={toggleRecording}
                        size="icon"
                        className={`rounded-full shrink-0 ${
                          isRecording
                            ? 'bg-destructive hover:bg-destructive/90'
                            : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                        }`}
                      >
                        <Icon name={isRecording ? 'Square' : 'Mic'} size={20} />
                      </Button>
                    )}
                  </div>
                  {isRecording && (
                    <div className="mt-2 text-center animate-pulse">
                      <span className="text-sm text-destructive">● Запись голосового сообщения...</span>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center animate-fade-in">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Icon name="MessageCircle" size={48} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Выберите чат</h3>
                  <p className="text-muted-foreground">
                    Начните общение с контактами, группами или каналами
                  </p>
                </div>
              </div>
            )}
          </div>

          {showProfile && (
            <div className="w-80 border-l border-border bg-card p-4 animate-slide-up">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Профиль</h2>
                <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setShowProfile(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <div className="flex flex-col items-center mb-6">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-3xl">
                    ВЫ
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">Вы</h3>
                <p className="text-sm text-muted-foreground">+7 999 123-45-67</p>
                <p className="text-xs text-muted-foreground">@username</p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Icon name="User" size={18} className="mr-3" />
                  Редактировать профиль
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Icon name="Settings" size={18} className="mr-3" />
                  Настройки
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Icon name="Moon" size={18} className="mr-3" />
                  Ночной режим
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Icon name="HelpCircle" size={18} className="mr-3" />
                  Помощь
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex-1 flex flex-col bg-gradient-to-br from-background to-muted">
          <div className="p-4 bg-card/50 backdrop-blur-sm border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                  АС
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">Анна Смирнова</h2>
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-ring"></span>
                  Видеозвонок
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">03:45</span>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full"
                onClick={endVideoCall}
              >
                <Icon name="Minimize2" size={20} />
              </Button>
            </div>
          </div>

          <div className="flex-1 relative p-6">
            <div className="h-full rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-background border border-border shadow-2xl relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center animate-fade-in">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Video" size={64} className="text-white" />
                  </div>
                  <p className="text-muted-foreground">
                    {isScreenSharing ? 'Демонстрация экрана активна' : 'Видеопоток'}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 w-48 h-36 rounded-2xl overflow-hidden bg-muted border-2 border-primary shadow-xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-primary/20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card/50 backdrop-blur-sm border-t border-border">
            <div className="flex items-center justify-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="w-14 h-14 rounded-full bg-muted hover:bg-muted/80"
              >
                <Icon name="Mic" size={24} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-14 h-14 rounded-full bg-muted hover:bg-muted/80"
              >
                <Icon name="Video" size={24} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleScreenShare}
                className={`w-14 h-14 rounded-full ${
                  isScreenSharing
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Icon name="Monitor" size={24} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-14 h-14 rounded-full bg-muted hover:bg-muted/80"
              >
                <Icon name="Settings" size={24} />
              </Button>
              <Button
                size="icon"
                onClick={endVideoCall}
                className="w-14 h-14 rounded-full bg-destructive hover:bg-destructive/90"
              >
                <Icon name="PhoneOff" size={24} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
