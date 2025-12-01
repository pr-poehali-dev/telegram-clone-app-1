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

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
  online: boolean;
}

interface Message {
  id: number;
  text: string;
  time: string;
  isMine: boolean;
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

  const chats: Chat[] = [
    {
      id: 1,
      name: 'Анна Смирнова',
      lastMessage: 'Отлично, давай созвонимся!',
      time: '14:23',
      unread: 2,
      avatar: '',
      online: true
    },
    {
      id: 2,
      name: 'Команда разработки',
      lastMessage: 'Митинг перенесли на 15:00',
      time: '13:45',
      unread: 0,
      avatar: '',
      online: false
    },
    {
      id: 3,
      name: 'Иван Петров',
      lastMessage: 'Спасибо за помощь!',
      time: '12:10',
      unread: 0,
      avatar: '',
      online: true
    },
    {
      id: 4,
      name: 'Дизайн-отдел',
      lastMessage: 'Макеты готовы',
      time: 'Вчера',
      unread: 5,
      avatar: '',
      online: false
    }
  ];

  const messages: Message[] = [
    { id: 1, text: 'Привет! Как дела?', time: '14:20', isMine: false },
    { id: 2, text: 'Привет! Всё отлично, работаю над проектом 🚀', time: '14:21', isMine: true },
    { id: 3, text: 'Круто! Можем обсудить детали?', time: '14:22', isMine: false },
    { id: 4, text: 'Отлично, давай созвонимся!', time: '14:23', isMine: false }
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

  return (
    <div className="flex h-screen bg-background text-foreground">
      {!isVideoCall ? (
        <>
          <div className="w-80 border-r border-border bg-card flex flex-col">
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Telegadex
                </h1>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <Icon name="Settings" size={20} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle className="text-xl font-bold">Настройки</SheetTitle>
                    </SheetHeader>
                    <ScrollArea className="h-[calc(100vh-80px)] mt-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold mb-4 text-muted-foreground">УВЕДОМЛЕНИЯ</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="notifications" className="cursor-pointer">
                                Показывать уведомления
                              </Label>
                              <Switch
                                id="notifications"
                                checked={notifications}
                                onCheckedChange={setNotifications}
                              />
                            </div>
                            <div className="flex items-center justify-between">
                              <Label htmlFor="sound" className="cursor-pointer">
                                Звук уведомлений
                              </Label>
                              <Switch
                                id="sound"
                                checked={soundEnabled}
                                onCheckedChange={setSoundEnabled}
                              />
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-sm font-semibold mb-4 text-muted-foreground">МЕДИА</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="autodownload" className="cursor-pointer">
                                Автозагрузка медиа
                              </Label>
                              <Switch
                                id="autodownload"
                                checked={autoDownload}
                                onCheckedChange={setAutoDownload}
                              />
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-sm font-semibold mb-4 text-muted-foreground">ВНЕШНИЙ ВИД</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="darkmode" className="cursor-pointer">
                                Тёмная тема
                              </Label>
                              <Switch
                                id="darkmode"
                                checked={darkMode}
                                onCheckedChange={setDarkMode}
                              />
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-sm font-semibold mb-4 text-muted-foreground">АККАУНТ</h3>
                          <div className="space-y-3">
                            <Button variant="ghost" className="w-full justify-start text-sm">
                              <Icon name="User" size={18} className="mr-3" />
                              Изменить профиль
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-sm">
                              <Icon name="Lock" size={18} className="mr-3" />
                              Конфиденциальность
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-sm">
                              <Icon name="Database" size={18} className="mr-3" />
                              Управление данными
                            </Button>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="text-sm font-semibold mb-4 text-muted-foreground">О ПРИЛОЖЕНИИ</h3>
                          <div className="space-y-3">
                            <Button variant="ghost" className="w-full justify-start text-sm">
                              <Icon name="Info" size={18} className="mr-3" />
                              Версия 1.0.0
                            </Button>
                            <Button variant="ghost" className="w-full justify-start text-sm">
                              <Icon name="HelpCircle" size={18} className="mr-3" />
                              Помощь и поддержка
                            </Button>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </SheetContent>
                </Sheet>
              </div>
              <div className="relative">
                <Icon
                  name="Search"
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  placeholder="Поиск чатов..."
                  className="pl-10 bg-background border-border rounded-2xl"
                />
              </div>
            </div>

            <ScrollArea className="flex-1">
              <div className="p-2">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
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
                            {chat.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-card rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm truncate">{chat.name}</span>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                          {chat.unread > 0 && (
                            <Badge className="ml-2 bg-primary text-white rounded-full px-2 py-0 text-xs">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="flex-1 flex flex-col">
            {selectedChat ? (
              <>
                <div className="p-4 border-b border-border bg-card flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                        АС
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="font-semibold">Анна Смирнова</h2>
                      <p className="text-xs text-green-500">Онлайн</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
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
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <Icon name="MoreVertical" size={20} />
                    </Button>
                  </div>
                </div>

                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-4 max-w-4xl mx-auto">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isMine ? 'justify-end' : 'justify-start'} animate-slide-up`}
                      >
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
                        placeholder="Написать сообщение..."
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
                    <Button
                      onClick={handleSendMessage}
                      size="icon"
                      className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shrink-0"
                    >
                      <Icon name="Send" size={20} />
                    </Button>
                  </div>
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
                    Начните общение с вашими контактами
                  </p>
                </div>
              </div>
            )}
          </div>
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